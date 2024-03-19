"use client"

type Props = {
    params: { projectName: string };
    searchParams: { [key: string]: string | string[] | undefined};
}

export default function Page({ params, searchParams }: Props) {
    const page = typeof searchParams.page === "string" ? searchParams.page : "1";
    return(
        <>
            <h1>Project: {params.projectName}</h1>
            <p>Page: {page}</p>
        </>
    )
}