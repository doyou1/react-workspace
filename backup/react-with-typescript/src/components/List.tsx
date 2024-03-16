import React from "react";
import { IState as IProps } from "../App";

// function List(props: IProps) {
// function List({ people }: IProps) {
const List:React.FC<IProps> = ({ people }) => {

    // const renderList = (): JSX.Element[] => {
    const renderList = () => {
        // return people.map((person): JSX.Element => {
            return people.map((person, index) => {
            return (
            <li className="List" key={index}>
                <div className="List-header">
                    <img className="List-img" src={person.url} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} 살</p>
                <p className="List-note">{person.note}</p>
            </li>)
        })
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List