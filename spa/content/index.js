/* generated by Svelte v3.23.2 */
import {
	HtmlTag,
	SvelteComponent,
	append,
	attr,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from '/spa/web_modules/svelte/internal/index.js';

import Grid from '/spa/content/../components/grid.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (13:2) {#each intro as paragraph}
function create_each_block(ctx) {
	let p;
	let html_tag;
	let raw_value = /*paragraph*/ ctx[3] + "";
	let t;

	return {
		c() {
			p = element("p");
			t = space();
			this.h();
		},
		l(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t = claim_space(p_nodes);
			p_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag = new HtmlTag(t);
		},
		m(target, anchor) {
			insert(target, p, anchor);
			html_tag.m(raw_value, p);
			append(p, t);
		},
		p(ctx, dirty) {
			if (dirty & /*intro*/ 2 && raw_value !== (raw_value = /*paragraph*/ ctx[3] + "")) html_tag.p(raw_value);
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
	let div2;
	let section;
	let t2;
	let div1;
	let h3;
	let t3;
	let t4;
	let grid;
	let t5;
	let br;
	let current;
	let each_value = /*intro*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	grid = new Grid({
			props: {
				items: /*allContent*/ ctx[2],
				filter: "blog"
			}
		});

	return {
		c() {
			div0 = element("div");
			h1 = element("h1");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			div2 = element("div");
			section = element("section");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			div1 = element("div");
			h3 = element("h3");
			t3 = text("Recent blog posts:");
			t4 = space();
			create_component(grid.$$.fragment);
			t5 = space();
			br = element("br");
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
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			section = claim_element(div2_nodes, "SECTION", { id: true });
			var section_nodes = children(section);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section_nodes);
			}

			section_nodes.forEach(detach);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h3 = claim_element(div1_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t3 = claim_text(h3_nodes, "Recent blog posts:");
			h3_nodes.forEach(detach);
			t4 = claim_space(div1_nodes);
			claim_component(grid.$$.fragment, div1_nodes);
			t5 = claim_space(div1_nodes);
			br = claim_element(div1_nodes, "BR", {});
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "text-xl font-semibold text-gray-700 p-5");
			attr(section, "id", "intro");
			attr(h3, "class", "text-gray-700 text-lg font-bold");
			attr(div1, "class", "p-2");
			attr(div2, "class", "text-base font-normal p-5");
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			append(div0, h1);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, div2, anchor);
			append(div2, section);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section, null);
			}

			append(div2, t2);
			append(div2, div1);
			append(div1, h3);
			append(h3, t3);
			append(div1, t4);
			mount_component(grid, div1, null);
			append(div1, t5);
			append(div1, br);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*title*/ 1) set_data(t0, /*title*/ ctx[0]);

			if (dirty & /*intro*/ 2) {
				each_value = /*intro*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(section, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			const grid_changes = {};
			if (dirty & /*allContent*/ 4) grid_changes.items = /*allContent*/ ctx[2];
			grid.$set(grid_changes);
		},
		i(local) {
			if (current) return;
			transition_in(grid.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(grid.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div0);
			if (detaching) detach(t1);
			if (detaching) detach(div2);
			destroy_each(each_blocks, detaching);
			destroy_component(grid);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props, { intro } = $$props, { allContent } = $$props;

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("intro" in $$props) $$invalidate(1, intro = $$props.intro);
		if ("allContent" in $$props) $$invalidate(2, allContent = $$props.allContent);
	};

	return [title, intro, allContent];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, intro: 1, allContent: 2 });
	}
}

export default Component;