import { useRouter } from 'next/router';
import Home from '../index';

const LangIndexPage = () => {
  const router = useRouter();
  const { lang } = router.query;

  return <Home lang={lang} />;
};

export default LangIndexPage;