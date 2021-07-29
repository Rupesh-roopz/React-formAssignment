import { Link} from "react-router-dom";

export function List(props) {
    let sNo = 1;
    return (
        <div className="listWrapper">
        <Link to="./"><button>Go to Home</button></Link>
        <table>
            <thead>
                <tr>
                    <th>S. No</th>
                    <th>Firstname</th>
                    <th>Email</th> 
                    <th>phone</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {props.name.map(( element ) =>
                                <tr>
                                    <td>{sNo++}</td>
                                    <td>{element.fullName}</td>
                                    <td>{element.email}</td>
                                    <td>{element.phone}</td>
                                    <td>{element.age}</td>
                                </tr>     
                )}
            </tbody>
        </table>
        </div>
    )
}