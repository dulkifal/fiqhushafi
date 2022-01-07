import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(1);
            router.push('/');
        }, 3000);
    }, [router])
    return (
        <div className="not-found">
            <h1>sorrey this page not avialable</h1>
            <p>Go back to home <Link href="/"><a>HomePage</a></Link> </p>
        </div>
    );
}

export default NotFound;