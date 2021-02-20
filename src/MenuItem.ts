export class MenuItem {

    id: Number;
    parent_id: Number | null;
    message: String;
    type?: String = null;
}
let menu: Array<MenuItem> = [
    {
        id: 1,
        message: '👋 Bienvenue Sur notre Service ',
        parent_id: null,
        type: 'welcome'
    },
    {
        id: 2,
        message: 'Pour Continuer Selectionnez Votre Langue ',
        parent_id: null,
        type: 'welcome'

    },
    {
        id: 3,
        message: 'Arabe',
        parent_id: 2,
        type: 'welcome'


    },
    {
        id: 4,
        message: 'Francais',
        parent_id: 2,
        type: 'welcome'

    },

];





export default menu