"use client"

import {
	BasketIconBtn,
	BellIcon,
	BookCatalogIcon,
	ChatIcon,
	CloseIconBtn,
	CommentIcon,
	DeliveryIcon,
	DotsMenuIconBtn,
	EmailIcon,
	ExchangeIcon,
	EyeToggleIconBtn,
	HeartIconBtn,
	LogoutIcon,
	PaymentCardIcon,
	PaymentCashIcon,
	PaymentIBANIcon,
	PenIconBtn,
	PercentIcon,
	PhoneBtn,
	PhoneIcon,
	PigIcon,
	SearchIcon,
	SettingIcon,
	TrashIconBtn,
	UserIconBtn,
	WalletIcon,
} from "../ui"

export default function IconsUI() {
	return (
		<div className="mx-auto my-0 justify-center flex py-5 gap-20">
			<div className="items-center flex flex-col gap-5">
				<div className="text-2xl mb-5">BUTTONS</div>
				<div className="items-center flex flex-col gap-2">
					<BasketIconBtn onClick={() => console.log("Basket clicked")} />
					<UserIconBtn onClick={() => console.log("UserIcon clicked")} />
					<HeartIconBtn
						onToggle={() => console.log("HeartIcon Violet clicked")}
					/>
					<HeartIconBtn
						colorFill="transparent"
						colorStroke="customDarkGray"
						onToggle={() => console.log("HeartIcon Black clicked")}
					/>
					<CloseIconBtn onClick={() => console.log("CloseIcon clicked")} />
					<PhoneBtn />
					<PenIconBtn onClick={() => console.log("PenIcon clicked")} />
					<EyeToggleIconBtn
						onToggle={isVisible =>
							console.log(`Eye is ${isVisible ? "opened" : "closed"}`)
						}
					/>
					<DotsMenuIconBtn
						onClickOpen={isOpened =>
							console.log(`Menu is ${isOpened ? "opened" : "closed"}`)
						}
					/>
					<TrashIconBtn
						size={30}
						onClick={() => console.log("Trash clicked")}
					/>
				</div>
			</div>
			<div className="items-center flex flex-col gap-5">
				<div className="text-2xl mb-5">ICONS</div>
				<div className="items-center flex flex-col gap-2">
					<BookCatalogIcon />
					<PhoneIcon />
					<DeliveryIcon />
					<PercentIcon />
					<WalletIcon size={40} colorFill="customViolet" />
					<ExchangeIcon />
					<SearchIcon />
					<PigIcon />
					<BellIcon />
					<ChatIcon />
					<SettingIcon />
					<LogoutIcon />x
					<PaymentCardIcon />
					<PaymentCashIcon />
					<PaymentIBANIcon />
					<EyeToggleIconBtn disabled />
					<EmailIcon />
					<TrashIconBtn isStatic />
					<CommentIcon />
				</div>
			</div>
		</div>
	)
}
