"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import TECHELPER from '@/components/projects/TECHELPER/page';
import Yurumetabi from '@/components/projects/Yurumetabi/page';
import Miraitouhyou from '@/components/projects/Miraitouhyou/page';
import { usePathname, useRouter } from 'next/navigation';
import ProjectTitle from '@/components/projects/ProjectTitle/page';

type Props = {
    params: { projectName: string };
    searchParams: { [key: string]: string | string[] | undefined};
}

export default function Page({ params, searchParams }: Props) {
    const router = usePathname();
    const [project, setProject] = useState( <ProjectTitle /> );

    useEffect(() => {
        if (router) {
            switch (router) {
                case '/projects/UMAMI':
                    setProject(<ProjectTitle />);
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
                    setProject(<ProjectTitle />);
            }
        }
    }, [router]);

    return(
        <main style={{margin:'74px 0 120px'}}>
            <section>
                <h2>{params.projectName}</h2>
                <div>{project}</div>
            </section>
        </main>
    )
}
