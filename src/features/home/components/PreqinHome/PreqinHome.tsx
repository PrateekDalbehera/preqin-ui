const Home = () => {
    return (
        <section className="h-screen pt-16 bg-cover bg-center" style={{backgroundImage: `url('src/assets/images/preqin-banner.svg')`}}>
            <div className="container flex mx-auto h-full">
                <div className="w-1/2 flex flex-col justify-center items-start text-white">
                    <h1 className="text-4xl font-bold text-left">The Home of Alternatives™</h1>
                    <h4 className="text-lg py-3 text-left">Empowering the global alternatives community with essential data and insight.</h4>
                    <div className="inline-block">
                        <a
                            href="https://www.preqin.com/our-products/preqin-pro"
                            target="_blank"
                            className="bg-slate-100 text-black py-2 px-4 rounded-lg inline-block mt-4"
                        >Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;