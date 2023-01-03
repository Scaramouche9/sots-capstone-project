package sots.charactercreator.models;

public class Background {
    private int backgroundId;

    private String backgroundName;

    public Background(int backgroundId, String backgroundName) {
        this.backgroundId = backgroundId;
        this.backgroundName = backgroundName;
    }

    public int getBackgroundId() {
        return backgroundId;
    }

    public void setBackgroundId(int backgroundId) {
        this.backgroundId = backgroundId;
    }

    public String getBackgroundName() {
        return backgroundName;
    }

    public void setBackgroundName(String backgroundName) {
        this.backgroundName = backgroundName;
    }
}
