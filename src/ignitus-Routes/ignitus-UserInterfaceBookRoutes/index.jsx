/* eslint-disable import/extensions */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { Notfound } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components';
import { interfaceButttons } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceButtons/Components';
import { interfaceNavigation } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceNavigation/Components';
import { interfaceIcons } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceIcons/Components';
import { interfaceTypography } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceTypography/Components';
import { interfaceCards } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceCards/Components';
import { interfaceNotFound } from '../../ignitus-UserInterfaceBook/Components/Layouts/interfaceNotFound/Components';
import { interfaceUnderConstruction } from '../../ignitus-UserInterfaceBook/Components/Layouts/interfaceUnderConstruction/Components';
import { interfaceColors } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceColors/Components';
import { InterfaceSideNavigation } from '../../ignitus-UserInterfaceBook/InterfaceSideNavigation/Components';
import { interfaceDropDown } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceDropDown/Components';
import { interfaceCheckBox } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceCheckBox/Components';
import { interfaceInput } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceInput/Components';
import { interfaceOpportunity } from '../../ignitus-UserInterfaceBook/Components/Organisms/interfaceOpportunity/Components';
import { interfaceSavedOpportunity } from '../../ignitus-UserInterfaceBook/Components/Layouts/interfaceSavedOpportunity/Components';
import { interfaceSearchInput } from '../../ignitus-UserInterfaceBook/Components/Atoms/interfaceSearchInput/Components';

const Container = styled.div`
  display:flex;
  flex-direction: row;
`;

const RightRow = styled.div`
  flex:1;
`;

const LeftRow = styled.div`
  flex:5;
`;

// eslint-disable-next-line import/prefer-default-export
const UserInterfaceBookRoutes = () => (
  <Container>
    <RightRow>
      <InterfaceSideNavigation />
    </RightRow>

    <LeftRow>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Notfound />
          )}
        />
        <Route
          path="/interface/buttons"
          component={interfaceButttons}
        />
        <Route
          path="/interface/sideNavigation"
          component={interfaceNavigation}
        />
        <Route
          path="/interface/icons"
          component={interfaceIcons}
        />
        <Route
          path="/interface/typography"
          component={interfaceTypography}
        />
        <Route
          path="/interface/cards"
          component={interfaceCards}
        />
        <Route
          path="/interface/opportunityPosted"
          component={interfaceOpportunity}
        />
        <Route
          path="/interface/notFound"
          component={interfaceNotFound}
        />
        <Route
          path="/interface/underConstruction"
          component={interfaceUnderConstruction}
        />

        <Route
          path="/interface/colors"
          component={interfaceColors}
        />

        <Route
          path="/interface/defaultDropdown"
          component={interfaceDropDown}
        />

        <Route
          path="/interface/defaultCheckbox"
          component={interfaceCheckBox}
        />

        <Route
          path="/interface/primaryInput"
          component={interfaceInput}
        />

        <Route
          path="/interface/opportunitySaved"
          component={interfaceSavedOpportunity}
        />

        <Route
          path="/interface/searchInput"
          component={interfaceSearchInput}
        />
      </Switch>
    </LeftRow>
  </Container>
);

export default UserInterfaceBookRoutes;