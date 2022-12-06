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
        <div className="not-found" dir='rtl'>
            <h1>آسف هذه الصفحة غير متوفرة</h1>
            
            <p>العودة الى الصفحة  <Link href="/">  الرئيسية </Link> </p>
        </div>
    );
}

export default NotFound;