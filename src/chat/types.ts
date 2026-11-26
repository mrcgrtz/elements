export type ChatMessage = {
	readonly content: string;
	readonly name?: string;
	readonly timestamp?: Date;
	readonly isMe?: boolean;
	readonly isEmoji?: boolean;
	readonly isAction?: boolean;
};
