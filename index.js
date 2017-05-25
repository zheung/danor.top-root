module.exports = async($, router) =>
	router.get('/', async(ctx) => {
		ctx.redirect('/kq');
	}
);