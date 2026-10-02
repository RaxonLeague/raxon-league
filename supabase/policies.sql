ALTER TABLE players ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Players Access" ON players FOR SELECT USING (true);
CREATE POLICY "Public Settings Access" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public Active Media" ON media FOR SELECT USING (is_archived = false);