"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import TECHELPER from '@/components/projects/TECHELPER/page';
import Yurumetabi from '@/components/projects/Yurumetabi/page';
import Miraitouhyou from '@/components/projects/Miraitouhyou/page';
import { usePathname, useRouter } from 'next/navigation';
import UMAMI from '@/components/projects/UMAMI/page';
import CARDCONNECT from '@/components/projects/CARDCONNECT/page';

type Props = {
    params: { projectName: string };
    searchParams: { [key: string]: string | string[] | undefined};
}

export default function Page({ params, searchParams }: Props) {
    const router = usePathname();
    const [project, setProject] = useState( <UMAMI /> );

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
                case '/projects/CARDCONNECT':
                    setProject(<CARDCONNECT />);
                    break;
                default:
                    setProject(<UMAMI />);
            }
        }
    }, [router]);

    return(
        <main style={{margin:'74px 0 120px'}}>
            {project}
        </main>
    )
}
