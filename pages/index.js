import Head from 'next/head'
import { json, redirect, withRemext } from 'remext/server'
import { Form, useActionData } from 'remext'

export default function Home({ name }) {
  const actionData = useActionData()
  return (
    <div>
      <Head>
        <title>{actionData.errorMessage ? 'Error: ' : ''}Remext</title>
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">{name}!(?)</a>
        </h1>

        {actionData.errorMessage ? (
          <p style={{ color: 'red' }}>{actionData.errorMessage}</p>
        ) : null}

        <Form>
          <p>
            <label>
              What's better when broken? <input name="answer" />
            </label>
          </p>
          <button type="submit">Submit</button>
        </Form>
      </main>
    </div>
  )
}

const action = ({ body, req, res }) => {
  const { answer } = body

  if (answer.toLowerCase() === 'egg') {
    return redirect('/success', true)
  }
  return json({
    errorMessage: 'Wrong! Hint: how do you like them in the morning?',
  })
}

const loader = async () => {
  return { props: { name: 'Remext' } }
}

export const getServerSideProps = withRemext(action, loader)
