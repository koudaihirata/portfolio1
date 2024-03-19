"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import UMAMI from '@/components/projects/UMAMI/page';
import TECHELPER from '@/components/projects/TECHELPER/page';
import Yurumetabi from '@/components/projects/Yurumetabi/page';
import Miraitouhyou from '@/components/projects/Miraitouhyou/page';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
    params: { projectName: string };
    searchParams: { [key: string]: string | string[] | undefined};
}

export default function Page({ params, searchParams }: Props) {
    const router = usePathname();
    const [Project, setProject] = useState( <UMAMI /> );

    useEffect(() => {
        if (router) {
            switch (router) {
                case '/projects/UMAMI':
                    setProject(<UMAMI />);
                    break;
                case '/projects/TECHELPER':
                    setProject(<TECHELPER />);
                    break;
                case '/projects/yurumetabi':
                    setProject(<Yurumetabi />);
                    break;
                case '/projects/miraitouhyou':
                    setProject(<Miraitouhyou />);
                    break;
                default:
                    setProject(<UMAMI />);
            }
        }
    }, [router]);

    const page = typeof searchParams.page === "string" ? searchParams.page : "1";
    return(
        <main>
            <h2>{params.projectName}</h2>
            <div>{Project}</div>
        </main>
    )
}
