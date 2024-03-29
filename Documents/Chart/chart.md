Mermaid Chart for Project

```Mermaid

flowchart TD
    A[Home Page] --> B(Sign in page)
    B --> C{Log in}
    B --> D{Sign Up}
    C --> E{Enter Database}
    D --> E
    E --> F(Create New Client)
    F --> H
    E --> G(Find Client)
    G --> H(Check Client Details and History)
    H --> I(Update Client Details)
    I --> H
    H --> J(Create Appointment Reminder)
    J --> H
    I --> J
    H --> E
    E --> K{Sign Out}
    K --> B 
