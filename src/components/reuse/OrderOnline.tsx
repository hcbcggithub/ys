/**
 * libs
 */
import reactClassname from '@lib/reactClassname';
/**
 * next
 */
import { useRouter } from 'next/router';
/**
 * react
 */
import { useEffect, useState } from 'react';
/**
 * local interfaces & types
 */
interface OrderOnlineProps {
  children: JSX.Element;
}
const OrderOnline: React.FC<OrderOnlineProps> = ({ children }) => {
  const router = useRouter();
  const [animateText, setAnimateText] = useState<boolean | 'initial'>(
    'initial'
  );
  useEffect(() => {
    setTimeout(() => {
      setAnimateText(false);
    }, 600);
    setAnimateText(true);
  }, [router]);
  return (
    <div className="mt-8 flex items-center justify-center">
      <section
        className={reactClassname(
          'transition-all transform ease-out',
          animateText === 'initial'
            ? 'hidden'
            : animateText
            ? 'opacity-0 translate-y-10'
            : 'opacity-100 translate-y-0'
        )}
      >
        {children}
      </section>
    </div>
  );
};
export default OrderOnline;
