import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { IDetailsProps } from "views/Details/types";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type IAppParamList = {
	Details: IDetailsProps;
	Landing?: Record<string, unknown>;
	Splash?: Record<string, unknown>;
}

type TAppScreenProps<T extends keyof IAppParamList> =
	NativeStackScreenProps<IAppParamList, T>;

export type { IAppParamList, TAppScreenProps };
