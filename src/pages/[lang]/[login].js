// import { useRouter } from 'next/router';
// import Login from '../login';

// const LangLoginPage = () => {
//   const router = useRouter();
//   const { lang } = router.query;
//   console.log('Loginlang:', lang);
//   return
//   <Login lang={lang} />;
// };

// export default LangLoginPage;
// Примерен файл: /pages/[lang]/[login].js
import { useRouter } from 'next/router';

const LoginPageRoute = () => {
  const router = useRouter();
  const { lang, login } = router.query;

  return (
    <div>
      <h1>Login Page for Language: {lang}</h1>
      <p>Login type: {login}</p>
      {/* Вашият код за страницата за вход */}
    </div>
  );
};

export default LoginPageRoute;

