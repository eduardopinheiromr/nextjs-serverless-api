import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Teste first post title</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Layout>Testando Layout</Layout>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <img src="/images/profile_edu.jpeg" alt="Eduardo Pinheiro" className="profile__picture" />
    <style jsx>{`
      .profile__picture{
        border-radius: 100%;
      }`}
      </style>
    </>
  )
}