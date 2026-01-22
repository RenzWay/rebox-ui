import { badgeComponentsCode } from "@/model/modelBadgeComponent";

export default function BadgeComponent() {
    return (
        <>
            <header>
                <h2>Badge</h2>
                <p>Badges are small UI elements that display brief information or status.</p>
            </header>
            <div>
                {badgeComponentsCode.map((item, index) => (
                    <div key={index}>
                        {item.title}
                    </div>
                ))}
            </div>
        </>
    )
}