import cls from "./HowItWorks.module.css";

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell us your needs',
      description: 'Share your requirements with us - what skills, experience level, and team roles you\'re looking for. Whether it\'s one developer or a full dedicated team, we carefully analyze your project goals and prepare a tailored hiring plan.',
      note: 'No need to waste weeks on job postings, screenings, or technical tests - we handle it all.'
    },
    {
      number: '02',
      title: 'Interview candidates in 3-7 days',
      description: 'Within just a few days, we\'ll send you a shortlist of vetted developers that match your criteria. Each candidate passes:',
      points: [
        'Technical skills assessment',
        'English communication check',
        'Cultural fit evaluation'
      ],
      additionalInfo: 'You select the best-fit profiles and run final interviews with your team.',
      note: 'On average, our clients make a hire in less than a week - compared to 2-3 months in traditional recruiting.'
    },
    {
      number: '03',
      title: 'Start risk-free',
      description: <>Once you've chosen your developer(s), we handle all legal, payroll, and onboarding processes. You start collaborating immediately — <strong>with a 2-week free trial period.</strong></>,
      additionalInfo: 'If the developer doesn\'t meet your expectations, we replace them at no cost.',
      note: 'This ensures you only keep talent that truly adds value to your company.'
    }
  ];

  return (
    <section className={cls.howItWorks}>
      <h1><span>How</span> It Works</h1>
      
      <div className={cls.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={cls.stepItem}>
            <div className={cls.stepNumber}>
              {step.number}
            </div>
            
            {index < steps.length - 1 && (
              <div className={cls.connectingLine} />
            )}
            
            <div className={cls.stepContent}>
              <h3 className={cls.stepTitle}>{step.title}</h3>
              
              <p className={cls.stepDescription}>{step.description}</p>
              
              {step.points && (
                <ul className={cls.stepPoints}>
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              )}
              
              {step.additionalInfo && (
                <p className={cls.stepAdditionalInfo}>{step.additionalInfo}</p>
              )}
              
              <p className={cls.stepNote}>{step.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};