import cls from "./ComparisonTable.module.css";

export const ComparisonTable = () => {
    const criteriaList = [
        "Team Setup",
        "Upfront Costs", 
        "Trial Period",
        "Replacement",
        "Legal & Compliance",
        "Developer Retention",
        "Risk Level"
    ];

    const udataValues = [
        "3-7 Days",
        "None",
        "14 Days Free",
        "Free & Fast", 
        "EU / GDPR Ready",
        "90% +",
        "Very Low"
    ];

    const internalValues = [
        "1-3 Months",
        "15-40% of Salary",
        "None",
        "1-3 Months",
        "Internal Effort",
        "60-70%", 
        "Medium"
    ];

    const freelanceValues = [
        "1-3 Months",
        "None",
        "None", 
        "1-3 Months",
        "None",
        "< 50%",
        "Very High"
    ];

    return (
        <section className={cls.comparisonTable} id="comparison-table">
            <h1><span>Comparison</span> Table</h1>
            <div className={cls.comparisonTableContent}>
                <div className={cls.comparisonCards}>
                    {/* Criteria Card */}
                    <div className={cls.criteriaCard}>
                        <div className={cls.cardHeader}>Criteria</div>
                        <div className={cls.cardBody}>
                            {criteriaList.map((criteria, index) => (
                                <div key={index} className={cls.criteriaItem}>{criteria}</div>
                            ))}
                        </div>
                    </div>

                    {/* UData Outstaff Card */}
                    <div className={`${cls.comparisonCard} ${cls.highlighted}`}>
                        <div className={cls.cardHeader}>
                            <div className={cls.companyName}>UData <span>Outstaff</span></div>
                        </div>
                        <div className={cls.cardBody}>
                            {udataValues.map((value, index) => (
                                <div key={index} className={cls.valueItem}>{value}</div>
                            ))}
                        </div>
                    </div>

                    {/* Internal Hiring Card */}
                    <div className={cls.comparisonCard}>
                        <div className={cls.cardHeader}>Internal Hiring</div>
                        <div className={cls.cardBody}>
                            {internalValues.map((value, index) => (
                                <div key={index} className={cls.valueItem}>{value}</div>
                            ))}
                        </div>
                    </div>

                    {/* Freelance Platforms Card */}
                    <div className={`${cls.comparisonCard} ${cls.freelanceCard}`}>
                        <div className={cls.cardHeader}>Freelance Platforms</div>
                        <div className={cls.cardBody}>
                            {freelanceValues.map((value, index) => (
                                <div key={index} className={cls.valueItem}>{value}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};