import React from 'react'

function List({ankets}) {
  return (
             <tbody>
                    {ankets.map((anket) => (
                        <tr key={anket.id}>
                            <th scope="row">{anket.id}</th>
                            <td>{anket.name}</td>
                            <td>{anket.surname}</td>
                            <td>{anket.email}</td>
                            <td>{anket.message}</td>

                        </tr>
                    ))}


                </tbody>
  )
}

export default List