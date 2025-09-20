
import cls from "./FaqItem.module.css";
export const FaqItem = ({ question, answer, isOpen, onToggle }: { 
    question: string; 
    answer: string; 
    isOpen: boolean;
    onToggle: () => void;
}) => {
    return (
        <div className={cls.faqItem} onClick={onToggle}>
                <div className={cls.faqIcon}>
                    ?
                </div>
            <div className={cls.faqHeader}>
                <h2 className={cls.faqQuestion}>{question}</h2>
            </div>
            {isOpen && <p className={cls.faqAnswer}>{answer}</p>}
        </div>
    )
}