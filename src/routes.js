import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Importação de Telas
 */
import Login from './screens/Login/login'
import NewUser from './screens/NewUser/newUser'
import Incidents from './screens/Incidents/incidents'
import NewIncident from './screens/NewIncident/newIncident'

const App = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <App.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <App.Screen
                    name='Login'
                    component={Login}/>
                <App.Screen
                    name='NewUser'
                    component={NewUser}/>
                <App.Screen
                    name='Incidents'
                    component={Incidents}/>
                <App.Screen
                    name='NewIncident'
                    component={NewIncident}/>
            </App.Navigator>
        </NavigationContainer>
    )
};

export default Routes;