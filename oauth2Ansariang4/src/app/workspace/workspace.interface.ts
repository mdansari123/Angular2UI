export interface Workspace {
    Intentname: string;
    Dialogname: string;
    Slotquestions: Slotquestion[];
    SlotquestionAction: SlotquestionAction[];
    SlotquestionActionPrompt :SlotquestionActionPrompt[];
    Response: string;
    
}

export interface Slotquestion {
    slotquestion: string;
}

export interface SlotquestionAction {
    txtrequried: string;
    txtparameter: string;
    txtentity: string;
    txtvalue: string;
    txtprompt: string;
}
export interface SlotquestionActionPrompt {

    prompttxtprompt: string;
}