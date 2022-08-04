import { localForageAtom } from "../persistence";

interface User {
  name: string | null;
}

const defaultUser: User = {
  name: null
};

const userState = localForageAtom("user", defaultUser);

export default userState;
