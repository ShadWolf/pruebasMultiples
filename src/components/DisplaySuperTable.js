import React from "react";

export default function DisplaySuperTable(props) {
  console.log(props.data);
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
