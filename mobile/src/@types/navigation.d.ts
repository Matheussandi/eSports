export interface GameParams {
    id: string;
    title: string;
    bannerUrl: string;
  }

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            SignIn: undefined;
            Home: AuthResponse;
            Game: GameParams;
            PostAd: AuthResponse;
        }
    }
}