import { localForageAtom } from "../persistence";

interface User {
  name: string | null;
}

const defaultValue: User = {
  name: null
};

const userAtom = localForageAtom("user", defaultValue);

export default userAtom;
