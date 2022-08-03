export interface IMenuOption {
	url: string;
	title: string;
	icon: string;
}

export type IMenuProps = IMenuOption & { isActive?: boolean }
