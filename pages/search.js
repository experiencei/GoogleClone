import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import SearchResults from '../components/searchResults/SearchResults';

import Response from '../Response';
const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;
 
function Search({ results}) {
   const router = useRouter()

    //   console.log(results);
    return (<div>
        <Head>
            <title>{router.query.term} -Google Search</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>
         <SearchResults results={results} />
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


// MarkoNS1990
// /
// googledocs_clone
// Public
// 1
// 00
