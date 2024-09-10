import React from 'react'
import Card from '../card/Card'
import { CompanySearch } from '../../api/company'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  searchResults: CompanySearch[]
  onPortfolioCreate: (e: React.SyntheticEvent) => void
}

const CardList: React.FC<Props> = ({searchResults, onPortfolioCreate}: Props): JSX.Element => {
  return <> 
  <div>
    {searchResults.length > 0 ? (
      searchResults.map((result)=>{
        return <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}></Card>})) 
        : (<p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">No results!</p>)}
  </div>
  </>;
}

export default CardList