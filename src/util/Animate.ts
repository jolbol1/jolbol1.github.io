/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@types/matter-js is not maintained in line with MatterJS. Ignoring errors relating to renders, engines etc.

import Matter, { Common } from 'matter-js';

export interface MatterAnimation {
	engine: Matter.Engine | null;
	runner: Matter.Runner | null;
	render: Matter.Render | null;
	canvas: HTMLCanvasElement | null;
	stop: () => void;
	delete: () => void;
}

export const makeFullscreenCanvas = (): HTMLCanvasElement => {
	const canvas = document.createElement('canvas');
	canvas.setAttribute('id', 'matter-canvas');
	document.body.appendChild(canvas);
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	return canvas;
};

const isOffscreen = (y: number, height: number) => {
	return y > height;
};

interface SvgPoints {
	x: number;
	y: number;
	width: number;
	height: number;
}

//Matter coordinates are from the middle of an object. This takes the svg and converts the X and Y to account for this.
const svgLocToMatter = (svg: HTMLElement) => {
	const data = svg.getBoundingClientRect();
	return {
		x: data.x + data.width / 2,
		y: data.y + data.height / 2,
		width: data.width,
		height: data.height
	} as SvgPoints;
};

const animate = (
	canvas: HTMLCanvasElement,
	bottomLine: HTMLElement,
	updateCount = 0,
	updateLimit = 50
) => {
	const Engine = Matter.Engine,
		Render = Matter.Render,
		Runner = Matter.Runner,
		Composites = Matter.Composites,
		MouseConstraint = Matter.MouseConstraint,
		Mouse = Matter.Mouse,
		Composite = Matter.Composite,
		Bodies = Matter.Bodies,
		Events = Matter.Events;

	// create engine
	// @ts-ignore
	let engine: Matter.Engine | null = Engine.create({ enableSleeping: true });
	const world = engine.world;

	// create renderer
	let render: Matter.Render | null = Render.create({
		element: document.body,
		engine: engine,
		canvas: canvas,
		options: {
			width: canvas.width,
			height: canvas.height,
			showSleeping: false,
			background: 'transparent',
			wireframeBackground: 'transparent',
			wireframes: false
		}
	});

	const svg = svgLocToMatter(bottomLine);

	Render.run(render);

	// create runner
	let runner: Matter.Runner | null = Runner.create();
	Runner.run(runner, engine);

	let stack: Matter.Composite | null = null;

	const stackCols = Math.floor(svg.width / 64);
	const stackWidth = stackCols * 64;
	const stackPadding = (svg.width - stackWidth) / 2 + 20;
	const stackStart = svg.x - svg.width / 2;

	// @ts-ignore
	const createStack = function () {
		return Composites.stack(
			stackStart + stackPadding,
			-500,
			stackCols,
			4,
			0,
			0,
			function (x: number, y: number) {
				const random = Math.random();
				if (random < 0.15) {
					return Bodies.rectangle(x, y, 48, 48, {
						render: {
							strokeStyle: '#ffffff',
							// @ts-ignore
							sprite: {
								texture: './img/typescript.png'
							}
						}
					});
				} else if (random < 0.3) {
					return Bodies.polygon(x, y, 6, 32, {
						render: {
							// @ts-ignore
							sprite: {
								texture: './img/csharp.png'
							}
						}
					});
				} else if (random < 0.4) {
					return Bodies.circle(x, y, 32, {
						render: {
							// @ts-ignore
							sprite: {
								texture: './img/react.png'
							}
						}
					});
				} else if (random < 0.5) {
					return Bodies.circle(x, y, 32, {
						render: {
							// @ts-ignore
							sprite: {
								texture: './img/html.png'
							}
						}
					});
				} else if (random < 0.6) {
					return Bodies.rectangle(x, y, 24, 24, {
						render: {
							strokeStyle: '#ffffff',
							// @ts-ignore
							sprite: {
								texture: './img/git.png'
							}
						}
					});
				} else if (random < 0.7) {
					return Bodies.rectangle(x, y, 48, 48, {
						render: {
							strokeStyle: '#ffffff',
							// @ts-ignore
							sprite: {
								texture: './img/sql.png'
							}
						}
					});
				} else if (random < 0.8) {
					return Bodies.rectangle(x, y, 32, 32, {
						render: {
							// @ts-ignore
							sprite: {
								texture: './img/redux.png'
							}
						}
					});
				} else if (random < 0.9) {
					return Bodies.circle(x, y, 24, {
						render: {
							// @ts-ignore
							sprite: {
								texture: './img/css.png'
							}
						}
					});
				} else if (random < 1) {
					return Bodies.rectangle(x, y, 48, 48, {
						render: {
							strokeStyle: '#ffffff',
							// @ts-ignore
							sprite: {
								texture: './img/js.png'
							}
						}
					});
				}
			}
		);
	};

	stack = createStack();

	// add and remove stacks every few updates
	Events.on(engine, 'afterUpdate', function () {
		// limit rate
		if (stack && updateCount <= updateLimit) {
			updateCount += 1;
			return;
		}
		if (stack) {
			const bodies = (<Matter.Composite>stack).bodies;
			bodies.forEach((body, index) => {
				const isOff = isOffscreen(body.position.y, canvas.height);
				if (isOff) {
					Composite.remove(engine!.world, body);
					Composite.remove(<Matter.Composite>stack, body);
					bodies.slice(index, 1);
				}
				return isOff;
			});
		}
		updateCount = 0;

		// remove last stack
		// if (stack) {
		// 	Composite.remove(world, stack);
		// }

		// // create a new stack
		// stack = createStack();

		// // add the new stack
		// Composite.add(world, stack);
	});

	// add another stack that will not be removed
	Composite.add(world, stack);

	Composite.add(world, [
		// walls
		// Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
		Bodies.rectangle(svg.x, svg.y, svg.width, svg.height, {
			isStatic: true,
			render: {
				visible: false
			}
		})
		// Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
		// Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
	]);

	// add mouse control
	const mouse = Mouse.create(render.canvas),
		mouseConstraint = MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false
				}
			}
		});
	mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel);
	mouseConstraint.mouse.element.removeEventListener(
		'DOMMouseScroll',
		mouseConstraint.mouse.mousewheel
	);

	Composite.add(world, mouseConstraint);

	// keep the mouse in sync with rendering
	render.mouse = mouse;

	// add gyro control
	if (typeof window !== 'undefined') {
		// eslint-disable-next-line no-var
		var updateGravity = function (event) {
			let orientation = typeof window.orientation !== 'undefined' ? window.orientation : 0,
				gravity = engine.gravity;

			if (orientation === 0) {
				gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
				gravity.y = Common.clamp(event.beta, -90, 90) / 90;
			} else if (orientation === 180) {
				gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
				gravity.y = Common.clamp(-event.beta, -90, 90) / 90;
			} else if (orientation === 90) {
				gravity.x = Common.clamp(event.beta, -90, 90) / 90;
				gravity.y = Common.clamp(-event.gamma, -90, 90) / 90;
			} else if (orientation === -90) {
				gravity.x = Common.clamp(-event.beta, -90, 90) / 90;
				gravity.y = Common.clamp(event.gamma, -90, 90) / 90;
			}
		};

		window.addEventListener('deviceorientation', updateGravity);
	}

	// fit the render viewport to the scene
	Render.lookAt(render, {
		min: { x: 0, y: 0 },
		max: { x: canvas.width, y: canvas.height }
	});

	// context for MatterTools.Demo
	return {
		engine: engine,
		runner: runner,
		render: render,
		canvas: render.canvas,
		stop: function () {
			Matter.Render.stop(render!);
			Matter.Runner.stop(runner!);
			if (typeof window !== 'undefined') {
				window.removeEventListener('deviceorientation', updateGravity);
			}
		},
		delete: function () {
			if (typeof window !== 'undefined') {
				window.removeEventListener('deviceorientation', updateGravity);
			}
			if (engine) {
				Engine.clear(engine);
			}
			if (render) {
				Render.stop(render);
				render.canvas.remove();
				// @ts-ignore
				render.canvas = null;
				// @ts-ignore
				render.context = null;
				render.textures = {};
			}
			if (runner) {
				Runner.stop(runner);
			}
			runner = null;
			render = null;
			engine = null;
			document.getElementById('matter-canvas')?.remove();
		}
	};
};

export default animate;
