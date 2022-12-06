import Posts from './Posts'
import Stories from './Stories'

const Feeds = () => {
    return (
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:max-w-3xl xl:max-w-3xl md:max-w-xl mx-auto w-full overflow-y-scroll scrollbar-hide">
            <section className="col-span-2">
                <Stories />
                <Posts />
            </section>
            <section>

            </section>
        </div>
    )
}

export default Feeds