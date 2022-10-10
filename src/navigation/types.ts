import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type IAppParamList = {
	Landing?: Record<string, unknown>;
	Splash?: Record<string, unknown>;
}

type TAppScreenProps<T extends keyof IAppParamList> =
	NativeStackScreenProps<IAppParamList, T>;

export type { IAppParamList, TAppScreenProps };
