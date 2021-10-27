import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import { API_KEY , CONTEXT_KEY} from '../keys';
import Response from '../Response';

 
function Search({ results}) {
   const router = useRouter()

      console.log(results);
    return (<div>
        <Head>
            <title>{router.query.term} -Google Search</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>
         
        </div>
    )
}

export default Search;

export async function getServerSideProps(context){
    const useDummydata = false;
    //   pagination
    const startIndex = context.query.start || "0"

    const data = useDummydata? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());

  // after server as rendre pass result to the client;


  return {
      props : {
          results : data
      }
  }
}
