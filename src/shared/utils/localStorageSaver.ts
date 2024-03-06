export class LocalStorageSaver<StateType=unknown> {
    private readonly name: string;
    private readonly initialState: StateType

    constructor(name: string, initialState: StateType) {
        this.name = name
        this.initialState = initialState
    }

    public save(state: StateType) {
        localStorage.setItem(this.name, JSON.stringify(state))
    }

    public getState() {
        const candidate = localStorage.getItem(this.name)
        if (!candidate) return this.initialState

        return JSON.parse(candidate) as StateType
    }
}