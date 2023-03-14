import { atom } from "recoil";
import { recoilPersist } from "recoil-persist"; // 로컬스토리지에 저장됨

const { persistAtom } = recoilPersist();

// enum : TypeScript에서 사용하는 열거형 타입, 몇 가지 고정된 값을 정의하고 변수로 사용 가능
export enum ThemeFlag {
  light,
  dark,
}

export const themeState = atom<ThemeFlag>({
  key: "THEME_STATE",
  default: ThemeFlag.light,
  effects_UNSTABLE: [persistAtom],
});
