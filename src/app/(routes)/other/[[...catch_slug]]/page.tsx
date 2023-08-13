
type CatchAllSlugType = {
    catch_slug: String[],
}

export default function Page({ params }:{params: CatchAllSlugType}) {

    return (
        <>
            <h1>You are visiting: /other{
                    params.catch_slug.map((slug) => `/${slug}`)
                }</h1>


        </>
    )
}