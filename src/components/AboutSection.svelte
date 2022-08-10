<script lang="ts">
	import { onMount } from 'svelte';

	const animations: IntersectionObserverCallback = async (element) => {
		if (element[0].isIntersecting) {
			await import('../styles/animation.css');
		}
	};

	onMount(() => {
		let options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.3
		};
		let observer = new IntersectionObserver(animations, options);
		const careerLine = document.getElementById('career-line');
		if (careerLine) {
			observer.observe(careerLine);
		}
	});

	let timer: NodeJS.Timeout;
	const onDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			if (!e.target) return;
			if (timer) clearTimeout(timer);
			let target = e.target as HTMLInputElement;
			let newLine = document.getElementById('notFound');
			if (!newLine) {
				newLine = document.createElement('p');
				newLine.id = 'notFound';
				newLine.className = 'text-white px-4 font-mono';
			}
			newLine.innerText = `Error: Command '${target.value}' not found. \n This is not a real terminal dummy...`;
			(e.target as HTMLInputElement).value = '';
			document.getElementById('shell')?.appendChild(newLine);
			timer = setTimeout(() => {
				newLine?.remove();
			}, 5000);
		}
	};
</script>

<section
	class="overscroll-auto snap-always snap-start min-h-screen h-fit flex flex-col items-center px-4"
>
	<h2 class="subheading-text text-5xl text-white font-bold text-center py-6 z-10">About Me</h2>
	<div
		class="shell mb-8 sm:w-5/6 lg:w-3/4 xl:w-4/6 sm:mt-4 z-10 max-w-screen-lg pb-4"
		id="shell"
		aria-description="A fake computer terminal, where each section of my info is presented as the result of a command"
	>
		<div class="outer yosemite grid grid-cols-4 w-full ">
			<div>
				<div class="dot red" />
				<div class="dot amber" />
				<div class="dot green" />
			</div>
			<p aria-hidden="true" class="col-span-2 col-start-2 text-center font-bold text-lg">Console</p>
		</div>
		<div class="text-white p-4 font-mono" id="shellBody">
			<article>
				<div class="text-lime-300 flex flex-row flex-wrap" id="career-line">
					/james/site/scripts:$
					<h3 class="anim-typewriter anim-invis inline-block max-w-fit overflow-hidden">
						&nbsp;./career
					</h3>
				</div>
				<p class="career-text anim-invis">
					I am a software engineer currently working for a leading systems, engineering and
					technology company in the Cloud Technologies department. Previously worked for a medium
					sized finance firm, developing in house apps to improve workflows. I have skills in
					developing CRUD apps with .NET, Building OfficeJS add-ins and full-stack web design.
				</p>
			</article>
			<br />
			<article>
				<div
					class="text-lime-300 anim-invis personal-line flex flex-row flex-wrap"
					id="script-line"
				>
					/james/site/scripts:$
					<h3 class="anim-typewriter1 inline-block max-w-fit overflow-hidden">&nbsp;./personal</h3>
				</div>
				<p class="personal-text anim-invis">
					I started coding over 10 years ago in Java, developing plugins for games I liked. Since
					then I have always had an interest in all things tech, from micro-controllers to
					full-stack development. The combination of problem solving and creativity continue to fuel
					my passion in the rapidly changing field of technology.
				</p>
			</article>
		</div>

		<div class="flex flex-col sm:flex-row px-4 font-mono">
			<span
				class="text-lime-300 pr-2 last-line anim-invis whitespace-nowrap border-r-2 border-transparent"
				>/james/site/scripts:$
			</span><br /><input
				id="cmd-line"
				class="flex-grow text-lime-300 bg-transparent outline-none"
				type="text"
				on:keydown={onDown}
				aria-description="a pretend command line where you can enter text and it looks as if its typed in terminal, site easter egg"
			/>
		</div>
	</div>
</section>

<style>
	.outer {
		background: #b4b4b4;
		padding: 10px;
		border-radius: 7px 7px 0px 0px;
	}

	.yosemite {
		background: #f6f6f6;
		background: -moz-linear-gradient(top, #f6f6f6 0%, #dadada 100%);
		background: -webkit-gradient(
			linear,
			left top,
			left bottom,
			color-stop(0%, #f6f6f6),
			color-stop(100%, #dadada)
		);
		background: -webkit-linear-gradient(top, #f6f6f6 0%, #dadada 100%);
		background: -o-linear-gradient(top, #f6f6f6 0%, #dadada 100%);
		background: -ms-linear-gradient(top, #f6f6f6 0%, #dadada 100%);
		background: linear-gradient(to bottom, #f6f6f6 0%, #dadada 100%);
		border: 1px solid #d8d8d8;
		border-bottom: 1px solid #b4b4b4;
	}

	.dot {
		display: inline-block;
		width: 10px;
		height: 10px;
		background: #f9f9f9;
		border-radius: 50%;
		margin: 0 4px 0 0;
	}

	.red {
		background: #ff6057;
		border: 1px solid #e14640;
	}

	.amber {
		background: #ffbd2e;
		border: 1px solid #dfa123;
	}

	.green {
		background: #27c93f;
		border: 1px solid #1dad2b;
	}

	.shell {
		background: rgba(0, 0, 0, 0.4);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(13.5px);
		-webkit-backdrop-filter: blur(13.5px);
		border: 1px solid rgba(0, 0, 0, 0.99);
	}

	.anim-invis {
		visibility: hidden;
	}
</style>
