import React from "react";
import { Dropdown } from 'semantic-ui-react'
import { Button, Image, List } from 'semantic-ui-react'
import "../../css/UserList.css"

export default function Users() {

    const options = [
        { key: 1, text: 'Block', value: 1 },
        { key: 2, text: 'Delete', value: 2 },

    ]
    return (
        <List divided verticalAlign='middle'>
            <List.Item>
                <List.Content floated='right'>
                    <Dropdown clearable options={options} selection />
                </List.Content>
                <Image avatar src='/images/avatar/small/lena.png' />
                <List.Content>Lena</List.Content>
            </List.Item>
            <List.Item>
                <List.Content floated='right'>
                    <Dropdown
                        text='Filter'
                        icon='filter'
                        floating
                        labeled
                        button
                        className='icon'
                    >
                        <Dropdown.Menu>
                            <Dropdown.Header icon='tags' content='Filter by tag' />
                            <Dropdown.Divider />
                            <Dropdown.Item
                                className={"UserDropdown"}
                                text='Important'

                            />
                            <Dropdown.Item
                                label={{ color: 'blue', empty: true, circular: true }}
                                text='Announcement'
                            />
                            <Dropdown.Item
                                label={{ color: 'black', empty: true, circular: true }}
                                text='Discussion'
                            />
                        </Dropdown.Menu>
                    </Dropdown>
                </List.Content>
                <Image avatar src='/images/avatar/small/lindsay.png' />
                <List.Content>Lindsay</List.Content>
            </List.Item>

        </List>
    )
}