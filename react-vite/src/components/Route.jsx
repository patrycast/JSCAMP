import { useRouter } from "../hooks/UseRouter";

// export function Route({path, component: Component}){
//  const {currentPath} = useRouter()

//  if(currentPath !== path) return null

//  return <Component/>
// }

export function Route({ path, component }) {
  const { currentPath } = useRouter();

  if (currentPath !== path) return null;

  const Component = component; // ahora lo usás realmente

  return <Component />;
}