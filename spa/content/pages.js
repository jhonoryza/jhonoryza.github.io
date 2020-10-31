/* generated by Svelte v3.23.2 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	destroy_each,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from '/spa/web_modules/svelte/internal/index.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (11:2) {#each description as paragraph}
function create_each_block(ctx) {
	let p;
	let raw_value = /*paragraph*/ ctx[2] + "";

	return {
		c() {
			p = element("p");
		},
		l(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			p_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, p, anchor);
			p.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*description*/ 2 && raw_value !== (raw_value = /*paragraph*/ ctx[2] + "")) p.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

function create_fragment(ctx) {
	let div0;
	let h1;
	let t0;
	let t1;
	let div1;
	let t2;
	let p;
	let a;
	let t3;
	let each_value = /*description*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div0 = element("div");
			h1 = element("h1");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			p = element("p");
			a = element("a");
			t3 = text("Back home");
			this.h();
		},
		l(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			div1_nodes.forEach(detach);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true });
			var a_nodes = children(a);
			t3 = claim_text(a_nodes, "Back home");
			a_nodes.forEach(detach);
			p_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "text-xl font-semibold text-gray-700 p-5");
			attr(div1, "class", "text-base font-normal p-5");
			attr(a, "href", "/");
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			append(div0, h1);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, div1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			insert(target, t2, anchor);
			insert(target, p, anchor);
			append(p, a);
			append(a, t3);
		},
		p(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data(t0, /*title*/ ctx[0]);

			if (dirty & /*description*/ 2) {
				each_value = /*description*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div0);
			if (detaching) detach(t1);
			if (detaching) detach(div1);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(t2);
			if (detaching) detach(p);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props, { description } = $$props;

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("description" in $$props) $$invalidate(1, description = $$props.description);
	};

	return [title, description];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, description: 1 });
	}
}

export default Component;