package sots.charactercreator.models;

public enum Alignment {
    LG(1),
    NG(2),
    CG(3),
    LN(4),
    N(5),
    CN(6),
    LE(7),
    NE(8),
    CE(9);

    public final int alignmentId;

    Alignment(int alignmentId) {
        this.alignmentId = alignmentId;
    }
}
