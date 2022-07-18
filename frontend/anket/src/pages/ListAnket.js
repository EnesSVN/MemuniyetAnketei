import { useEffect, useState } from 'react'
import { listAnket } from '../api/ApiCalls'
import Header from '../components/Header'
import List from '../components/List'

function ListAnket() {

    const [ankets, setAnket] = useState([])


    useEffect(() => {
        listAnket()
            .then(response => {
                setAnket(response.data)
            })
            .catch(error => console.log({ error }))



    }, [])

    return (
        <div>
            <Header/>

            <table className="table table-dark mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>

                    </tr>
                </thead>
               <List ankets={ankets}/>
            </table>

        </div>
    )
}

export default ListAnket