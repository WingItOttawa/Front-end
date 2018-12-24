import React, { Component } from 'react';
import { IoIosSearch } from 'react-icons/io';

export type Props = {};

class SearchBar extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = { term: '' };
    }
    
}
