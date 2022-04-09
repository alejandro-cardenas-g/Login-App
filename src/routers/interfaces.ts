export interface IRoute{
    path: string;
    element: () => JSX.Element;
    routeType: Boolean;
}