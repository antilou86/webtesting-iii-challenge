// Test away!
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/reactyarn test";

import Controls from './Controls'
import Dashboard from '../dashboard/Dashboard'

describe('<Controls/>', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('toggles the closed/locked states when clicked', () => {
        const toggleLock = Dashboard.toggleLocked();
        const toggleClose = Dashboard.toggleClosed();
        
    })
})

